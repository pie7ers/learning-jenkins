pipeline {
  agent any

  tools {
    nodejs 'node-20'//this corresponds to the instalation name in manage/configureTools/
  }

  environment {
    CI = 'true'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Check Node') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    always {
      cleanWs()
    }
    success {
      echo 'Build OK'
    }
    failure {
      echo 'Build FAILED'
    }
  }
}
