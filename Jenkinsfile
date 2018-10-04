pipeline {
  agent any

  environment {
    CI='true'
  }

  stages {
    stage ('Install') {
      steps {
        nodejs(nodeJSInstallationName: 'node10') {
          sh 'node --version && yarn --version'
          sh 'yarn install --ignore-scripts'
        }
      }
    }

    stage ('Test') {
      steps {
        nodejs(nodeJSInstallationName: 'node10') {
          sh 'yarn run test'
        }
      }
    }

    stage ('Build') {
      steps {
        sh 'ember build --prod'
        sh 'rsync --recursive --backup --backup-dir=${PUBLISH_DIR}backups ${WORKSPACE}/dist/ ${PUBLISH_DIR}'
      }
    }
  }
}
