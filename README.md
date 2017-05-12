## Hello
ssh -i hapi-wayne.pem ubuntu@ec2-54-175-130-11.compute-1.amazonaws.com

[09:08](https://www.udemy.com/ci-and-cd-with-aws-codepipeline-jenkins-and-aws-codedeploy/learn/v4/t/lecture/5605976?start=0)


## Setup
  - chown :Users [node-express-wayne].pem
  - chmod 600 [node-express-wayne].pem

  [Steps Here](https://pkg.jenkins.io/debian/)
  - wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
    add key to server
  - sudo vi /etc/apt/sources.list
    jenkins repository
  - sudo apt-get update
  - sudo apt-get install jenkins

  - sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    Get Admin Password

  - Install Jenkins AWS codepipleine

  - sudo apt-get install python-software-properties
  - curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    install node
  - sudo apt-get install nodejs
  - sudo npm i -g npm
  - sudo apt-get install -y python-pip ruby2.0 wget

  [AWS Agent](http://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install.html#codedeploy-agent-operations-install-ubuntu)
  - wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
  - chmod +x ./install
  - sudo ./install auto
