pipeline{
    agent any
    stages {
        stage('Installing dependencies') {
            steps {
                echo 'installing packages'
                bat 'npm install'
            }
        }

        stage('Testing') {
            steps {
                echo 'running tests'
                bat 'npm run test'
            }
        }
    }
}