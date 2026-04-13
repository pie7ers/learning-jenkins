pipeline {
  agent {
    docker {
      image 'node:20-alpine'
      args '-u root:root' // evita problemas de permisos en algunos casos
    }
  }

  environment {
    CI = 'true'
  }

  options {
    timestamps()
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Debug') {
      steps {
        sh '''
          echo "PATH=$PATH"
          node -v
          npm -v
        '''
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    /* stage('Lint') {
      when {
        expression { fileExists('package.json') }
      }
      steps {
        sh 'npm run lint --if-present'
      }
    } */

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    /* stage('Build') {
      when {
        expression { fileExists('package.json') }
      }
      steps {
        sh 'npm run build --if-present'
      }
    } */
  }

  post {
    success {
      echo 'Build OK'
    }
    failure {
      echo 'Build FAILED'
    }
    always {
      cleanWs()
    }
  }
}
