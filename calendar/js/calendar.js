function calendar(url) {
    this.config = {
        calendarBox: $('#calendarBox'),        //日历外容器id
        date: new Date(),
        ajaxUrl: url
    }
    this.init()
}
calendar.prototype = {

    constructor : calendar,

    init: function () {
        this.config = $.extend(this.config,{});
        self = this;
        config = this.config;
        this._renderHTML()._setBtnStates()._bind()._ajax();
    },
    _renderHTML: function (date) {
        date = date ? date : config.date;
        var iYear = date.getFullYear(),
            iMonth = date.getMonth()+1,
            weeks =[{wd: '日', weekend: 'weekend'},
                    {wd: '一'},
                    {wd: '二'},
                    {wd: '三'},
                    {wd: '四'},
                    {wd: '五'},
                    {wd: '六', weekend: 'weekend'}],
            template = '<div class="calendar"><div class="nav">\n' +
                '            <ul class="date-title">\n' +
                '                <li class="cur title ui-box" data-month="'+iMonth+'">'+iYear+'年'+iMonth+'月</li>\n' +
                '                <li class="title ui-box" data-month="'+(iMonth+1)+'">'+iYear+'年'+(iMonth+1)+'月</li>\n' +
                '                <li class="title ui-box" data-month="'+(iMonth+2)+'">'+iYear+'年'+(iMonth+2)+'月</li>\n' +
                '                <li class="title ui-box" data-month="'+(iMonth+3)+'">'+iYear+'年'+(iMonth+3)+'月</li>\n' +
                '            </ul>\n' +
                '            <div class="btn">\n' +
                '                <a href="javascript:;" class="prev"><</a>\n' +
                '                <a href="javascript:;" class="next">></a>\n' +
                '            </div>\n' +
                '        </div><div class="weeks">';
        $.each(weeks,function (i,v) {
            v.weekend = v.weekend ? v.weekend : '';
            template += '<span class="'+v.weekend+'">'+v.wd+'</span>';
        })
        template += '</div><ul class="days"></ul></div>';
        config.calendarBox.empty();
        config.calendarBox.append(template);
        this._dateHTML(date);
        return this;
    },
    _titleHTML:function () {

    },
    _dateHTML: function (date) {
        date = date ? date : config.date;
        var iYear = date.getFullYear(),
            iMonth = date.getMonth()+1,
            firstDays = new Date(iYear, iMonth - 1, 1).getDay(),
            monthDays = new Date(iYear, iMonth, 0).getDate(),
            template = '</div><ul class="days">';
        var days_array    = [];
        for(;firstDays--;){
            days_array.push(-firstDays);
        }
        for(var i = 1; i <= monthDays; i++) days_array.push(i);
        days_array.length = this._maxCell(date)
        var rows  = Math.ceil(days_array.length / 7);
        for(var i = 0; i < rows; i++) {
            for (var j = 0; j <= 6; j++) {
                var days = 0;
                if(days_array[j + 7 * i]<=0){
                    days = iMonth-1 +'月'+ new Date(iYear, iMonth - 1, days_array[j + 7 * i]).getDate()
                }else{
                    days = days_array[j + 7 * i] || '';
                }
                var date = days ? iYear + '-' + this._filled(iMonth) + '-' + this._filled(days) : '';
                template += days ? '<li class="lock" data-date="'+date+'"><span>'+days+'</span></li>' : '<li class="unlock"></li>'
            }
        }
        $('.days').empty();
        $('.days').append(template);
        return this;
    },
    _maxCell: function(oDate) {
        var iYear  = oDate.getFullYear(),
            iMonth = oDate.getMonth() + 1,
            aCell  = [];
            aCell.push(new Date(iYear, iMonth - 1, 1).getDay() + new Date(iYear, iMonth * 1, 0).getDate());
        return Math.max.apply(null, aCell);
    },
    _filled: function(v) {
        return v.toString().replace(/^(\d)$/, '0$1');
    },
    _bind: function () {
        config.calendarBox.on('click','.title',function () {
            var index = $(this).index();
            $(this).siblings().removeClass('cur');
            $(this).addClass('cur');
            self._dateHTML(self._getMonth(config.date,index))._ajax();
        }),
        config.calendarBox.on('click','.prev',function () {
            config.date = self._getMonth(config.date,-4);
            self._renderHTML()._setBtnStates()._ajax();
        })
        config.calendarBox.on('click','.next',function () {
            config.date = self._getMonth(config.date,4)
            self._renderHTML()._setBtnStates()._ajax();
        })
        return this;
    },
    _getMonth: function(v, n) {
        return new Date(v.getFullYear(), v.getMonth() * 1 + n);
    },
    _setBtnStates: function () {
        var prev = config.calendarBox.find('.prev'),
            //next = config.calendarBox.find('.next'),
            curDate = config.date,
            minDate = new Date();
        if(curDate < minDate){
            prev.hide()
        }
        return this;
    },
    _ajax: function () {
        $.ajax(config.ajaxUrl,{
            method: 'post',
            dataType :'json',
            data: {year:config.date.getFullYear(),month:config.calendarBox.find('.cur').attr('data-month')},
            success: function (data) {
                $.each(data,function (index, value) {
                    config.calendarBox.find('.lock').each(function (i,v) {
                        var key = $(v).attr('data-date')
                        if(key == index){
                            var html = $("<p>$"+value.price+"</p>")[0]
                            this.append(html)
                        }
                    });

                })

            }
        })
    }
}