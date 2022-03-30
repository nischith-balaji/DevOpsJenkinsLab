pipeline{
    agent any
    stages {
        stage('Repo init') {
            steps {
                echo 'installing packages'
                npm install
            }
        }

        stage('Testing') {
            steps {
                echo 'running tests'
                npm run test
            }
        }
    }
}