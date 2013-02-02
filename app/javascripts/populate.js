(function () {
  "use strict";

  var sections = ['prestige', 'assignments', 'scorestreak', 'attachment', 'gamemode', 'primary_weapon_smg'];

  $.each(sections, function (index, section) {
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


}());