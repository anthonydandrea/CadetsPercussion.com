BUILD_NAME=build_$(date +'%m.%d.%Y.%H.%M.%S')
EXTENSION=.tar.gz
ZIP_NAME=$BUILD_NAME.$EXTENSION


# create build
npm run-script build


# create zip of versioned build, put in archive
touch $ZIP_NAME
tar -zcvf $ZIP_NAME --exclude=$ZIP_NAME --exclude='node_modules' --exclude='archive' --exclude='ec2.pem' --exclude='.git*' .
mv $ZIP_NAME archive


# replace current build on ec2 instance
ssh -i ec2.pem $EC2_HOST 'rm -r /home/ubuntu/CadetsPercussion.com/build'
scp -r -i ec2.pem build $EC2_HOST:~/CadetsPercussion.com/
