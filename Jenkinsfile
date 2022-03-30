pipeline{
    agent any
    stages {
        stage('Repo init') {
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