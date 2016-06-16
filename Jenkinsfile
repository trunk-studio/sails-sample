node {

  stage 'checkout project'
  git url: 'https://github.com/TrunkWorkshop/sailsSample.git'

  stage 'check env'

  sh "node -v"
  sh "nvm -v"
  sh "npm i pm2 -g"

  stage 'build project'
  sh "npm i"

stage 'test project'
  sh "npm test"

  stage 'run project'
  sh "pm2 start app.js --name 'sailsSample'"

  try{
    stage 'Approve, go production'
    def url = 'http://localhost:8000/'
    input message: "Does staging at $url look good? ", ok: "Deploy to production"
  }finally{
    sh "pm2 delete sailsSample"
  }

  stage 'package production'
  sh "npm run package-prod"

  stage 'deploy production'
  sh "make deploy-production-tar"

  stage 'restart production'
  sh "make restart-production"

}
