(function () {
  'use strict';

  $.get('data/resources.txt', function (data) {
    var sections = data.split('\n');
    delete sections[sections.length - 1];
    $.each(sections, function (index, section) {
      // create tab
      section = section.replace('/', '_');
      // create tab
      $('.tabs').append('<dd><a href="#' + section + '">' + section + '</a></dd>');
      // create container
      $('.tabs-content').append('<li id="' + section + 'Tab"><table class="twelve"><thead><tr><th>Description</th><th>XP</th><th>Progress</th></tr></thead><tbody></tbody></table></li>');

      $.get('data/' + section + '.html', function (data) {
        var $rows = $(data).find('.challenge_list');
        $rows.find('> li').each(function () {
          var t = $(this).find('li').last();
          var stat = '<td>' + t.find('.stat').html() + '</td>';
          var xp = '<td>' + t.find('.xp_reward').html() + '</td>';
          var pie = t.find('.pie_chart').html();
          var percent = '<td><div class="progress"><span class="meter" style="width:' + pie + '%;"></span></div></td>';
          if (parseInt(pie, 10) !== 100) {
            $('#' + section + 'Tab').find('tbody').append('<tr>' + stat + xp + percent + '</tr>');
          }
        });
      });
    });
  });

}());
