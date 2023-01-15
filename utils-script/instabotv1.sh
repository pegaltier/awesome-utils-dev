#!/bin/bash
# 1. get browser curl from the instagram webapp to have the correct credentiels
# 2. permission: chmod u+r+x instabotv1.sh
# 3. run: ./instabotv1.sh
echo '-----------------'
echo 'instagram_bot v1'
echo '-----------------'
echo 'start...'

function followById () {

    curl 'https://www.instagram.com/web/friendships/'$1'/follow/' \
    -X 'POST' \
    -H 'authority: www.instagram.com' \
    -H 'content-length: 0' \
    -H 'x-ig-www-claim: hmac.AR2p6OhAOb-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
    -H 'x-instagram-ajax: 1cb44f68ffec' \
    -H 'content-type: application/x-www-form-urlencoded' \
    -H 'accept: */*' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Safari/537.36' \
    -H 'x-requested-with: XMLHttpRequest' \
    -H 'x-csrftoken: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
    -H 'x-ig-app-id: 936619743392459' \
    -H 'sec-gpc: 1' \
    -H 'origin: https://www.instagram.com' \
    -H 'sec-fetch-site: same-origin' \
    -H 'sec-fetch-mode: cors' \
    -H 'sec-fetch-dest: empty' \
    -H 'referer: https://www.instagram.com/' \
    -H 'accept-language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' \
    -H 'cookie: ig_cb=2; ig_did=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx; mid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx; csrftoken=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx; ds_user_id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx; sessionid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx; rur=PRN' \
    --compressed

    time=$(( RANDOM % 7 + 2 ))
    echo -e ' follow:' $1 '- sleep:' $time '...' # \n
    sleep $time
}
#-----------------------------------
# followById "427553890" # messi
# followById "173560420" # ronaldo
#-----------------------------------
echo 'end.'