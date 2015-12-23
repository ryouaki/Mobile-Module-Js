#/bin/bash

osName=`uname`
nodeCmd="node"

appName="app.js"
echo $appName

if [ "$osName" = "Linux" ];then
	for pid in `ps -aux | grep "node $appName" | grep -v "grep" | awk '{print $1}'` 
	do
		kill -9 $pid
	done
elif [ "$osName" = "Darwin" ]; then
	for pid in `ps -e | grep "node $appName" | grep -v "grep" | awk '{print $1}'` 
	do
		kill -9 $pid
	done
fi

$nodeCmd $appName