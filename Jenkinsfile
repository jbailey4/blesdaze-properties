pipeline {
  agent any

  environment {
    CI='true'
  }

  stages {
    stage ('Install') {
      steps {
        echo 'Install...'
        nodejs(nodeJSInstallationName: 'node9') {
          sh 'npm install'
        }
      }
    }

    stage ('Test') {
      steps {
        echo 'Test...'
        nodejs(nodeJSInstallationName: 'node9') {
          sh 'npm test'
        }
      }
    }

    stage ('Build') {
      steps {
        echo 'Build...'
      }
    }
  }
}
