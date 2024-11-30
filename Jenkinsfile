pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('docker-hub-creds') // Set your Jenkins Docker Hub credentials ID
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo-name.git' // Replace with your repo URL
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    sh 'docker build -t ahmedhanzala01/backend-app:latest -f backend/Dockerfile ./backend'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    sh 'docker build -t ahmedhanzala01/frontend-app:latest -f frontend/Dockerfile ./frontend'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS) {
                        sh 'docker push ahmedhanzala01/backend-app:latest'
                        sh 'docker push ahmedhanzala01/frontend-app:latest'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down' // Cleanup after each run
        }
    }
}
