#!/bin/bash
while read i; do
  export filename=`echo $i | sed -e 's/\//_/g'`
  wget --load-cookies cookies.txt  --referer 'https://elite.callofduty.com/player/home' --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.152 Safari/537.22' -O $filename.html https://elite.callofduty.com/career/playercardops2/challenges_list/xbox/54d10030cc86b1b93bd44d86bd1561e1/$i?sort=nearest_to_completion&_=1362245622257
done < resources.txt
