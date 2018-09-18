pipeline {
  agent any

  environment {
    CI='true'
  }

  stages {
    stage ('Install') {
      steps {
        echo 'Install...'
        nodejs(nodeJSInstallationName: 'node10') {
          sh 'node --version && yarn --version'
          sh 'yarn install --ignore-scripts'
        }
      }
    }

    stage ('Test') {
      steps {
        echo 'Test...'
        nodejs(nodeJSInstallationName: 'node10') {
          sh 'yarn run test'
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
