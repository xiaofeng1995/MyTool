<?php
/**
 * Created by PhpStorm.
 * User: dwq
 * Date: 2018/12/4
 * Time: 11:23
 */
class address
{
    public $me;
    public function __construct()
    {
        parent::plugin();
        $this->me = $this->_info();
    }

    /**
     * 智能解析收货地址
     * @param string 包含丰富信息的字符串
     * @return array 姓名，手机号，邮编，详细地址
     */
    public function smart_parse()
    {
        $address = $this->get('text');
        if(!$address){
            echo json_encode(array('status'=>0,'info'=>'地址信息不能为空'));
        }

        $result = [];
        $search = ['地址','收货地址','收货人','收件人','收货','邮编','电话','：',':','；',';','，',',','。','|','/'];
        $address = str_replace($search,' ',$address);

        $address = preg_replace("/ {2,}/", ' ', $address);//多个空格换成一个空格

        $address = preg_replace('/(\d{3})-(\d{4})-(\d{4})/', '$1$2$3', $address);//去掉手机号里的横线

        if(preg_match('/1[34578]\d{9}/', $address, $mobiles)){ // 手机
            $result['mobile'] = $mobiles[0];
        } else if(preg_match('/(\d{3,4}-)?\d{7,8}/', $address, $mobiles)){ // 固定电话
            $result['mobile'] = $mobiles[0];
        }
        $address = str_replace($mobiles[0], '', $address);

        preg_match('/\d{6}/', $address, $match); //提取邮编
        if ($match && $match[0]) {
            $result['zipcode'] = $match[0];
            $address = str_replace($match[0], '', $address);
        }

        $address = trim(preg_replace('/ {2,}/', ' ', $address));//多个空格换成一个空格,并去除首位空格
        $address_arr = explode(' ', $address); //分隔成数组

        if(count($address_arr)>1){
            $result['fullname'] = $address_arr[0];
            foreach ($address_arr as $value) {
                if (strlen($value) < strlen($result['fullname'])) {
                    $result['fullname'] = $value;
                }
            }
            $address = trim(str_replace($result['fullname'], '', $address));
        }
        $address_detail = $this->address_info($address);
        if($address_detail){
            foreach ($address_detail as $key => $value){
                if($address_detail[$key]){
                    $result[$key] = $address_detail[$key];
                }
            }
        }
        echo json_encode($result);;
    }



    /**
     * 详细地址智能解析
     * @param $address
     */
    public function address_info($address)
    {
        $regions = $this->get_address_arr();
        // 初始化数据
        $province = $city = $county = array();

        // 先查找省份-第一级地区
        $province = $this->check_address($address, $regions);
        if($province){
            $regions = $this->get_address_arr($province['id']);
            $city = $this->check_address($address, $regions);
            if($city){
                $regions = $this->get_address_arr($city['id']);
                $county = $this->check_address($address, $regions);
            }
        }else{
            $regions = $this->get_address_arr(0,true);
            $city = $this->check_address($address, $regions);
            if($city){
                $province = $this->model('opt')->opt_one($city['parent_id']);
                $regions = $this->get_address_arr($city['id']);
                $county = $this->check_address($address, $regions);
            }
        }
        return $this->get_address_info($address,$province,$city,$county);
    }

    public function get_address_info($address,$province,$city,$county)
    {
        $find_str = '';
        if($province['name']){
            $find_str = $province['name'];
            if($city['name']){
                $find_str = $city['name'];
                if($county['name']){
                    $find_str = $county['name'];
                }
            }
        }

        // 截取详细的信息
        $find_str_len = mb_strlen($find_str,'utf-8');
        for($i=0; $i<$find_str_len-1; $i++){
            $substr = mb_substr($find_str,0,$find_str_len - $i, 'utf-8');
            $end_index = mb_strpos($address, $substr);
            if ($end_index){
                $address = mb_substr($address, $end_index + mb_strlen($substr) , mb_strlen($address) - $end_index);
            }
        }
        !empty($find_str) && $find_str = '|\S*' . $find_str;
        $info = preg_replace("/\s*|,|，|:|：{$find_str}/i", '', $address);

        return array(
            'province' => $province['name'],
            'city'     => $city['name'],
            'county'   => $county['name'],
            'address'     => $info,
        );
    }

    /**
     * 匹配地址
     * @param $address 要解析的地址字串
     * @param $list 城市数组
     * @param $force
     * @param $str_len
     */
    public function check_address($address,$list,$str_len=2)
    {
        $result = [];

        foreach ($list as $city_key=>$city){
            $city_name = mb_substr($city['name'], 0, $str_len,'utf-8');

            //判断是否存包含当前地址字符, 如果存在相关字眼，保存该地址的所有子地址
            if(mb_strstr($address,$city_name,false,'utf-8')){

                // 必须名称长度同时达到当前比对长度
                if(strlen($city['name']) < $str_len){
                    continue;
                }

                $result = $city;
            }
        }
        return $result;
    }

    /**
     * 获取地址源数组
     * @param $pid
     * @param $force
     */
    private function get_address_arr($pid = 0,$force=false)
    {
        if(!$force){
            $sql = "select * from area where parent_id=".$pid;
            $address_arr = $this->db->get_all($sql);
        }else{
            $sql = "select * from area whereparent_id in (select id from area where parent_id = 0)";
            $address_arr = $this->db->get_all($sql);
        }
        return $address_arr;
    }
}