pipeline {
  agent any

  environment {
    CI='true'
  }

  stages {
    stage ('Install') {
      steps {
        echo 'Install...'
        sh 'npm install && bower install'
      }
    }

    stage ('Test') {
      steps {
        echo 'Test...'
      }
    }

    stage ('Build') {
      steps {
        echo 'Build...'
      }
    }
  }
}
