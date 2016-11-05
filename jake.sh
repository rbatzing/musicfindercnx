
[ ! -f ./node_modules/.bin/jake ] && echo "npm rebuild" && npm rebuild

node_modules/.bin/jake $*