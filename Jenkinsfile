pipeline {
  agent any

  environment {
    CI="true"
  }

  stages {
    stage ('Test') {
      steps {
        echo "Test..."
        sh "node --version"
      }
    }

    stage ('Install') {
      steps {
        echo "Install..."
      }
    }

    stage ('Build') {
      steps {
        echo "Build..."
      }
    }
  }
}
