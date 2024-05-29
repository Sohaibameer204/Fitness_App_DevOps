pipeline {
    agent any

    environment {
        GOOGLE_APPLICATION_CREDENTIALS = credentials('my-ci-cd-service-account') // Jenkins credential ID
        PROJECT_ID = 'animated-lyceum-423316-j4'
        INSTANCE_NAME = 'jenkins'
        ZONE = 'us-central1-a'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Sohaibameer204/Jenkins_CI-CD.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                bat 'echo "Building the application..."'
                // For example, if you're using Maven:
                // bat 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                bat 'echo "Running tests..."'
                // For example, if you're using Maven:
                // bat 'mvn test'
            }
        }

        stage('Package') {
            steps {
                bat 'echo "Packaging the application..."'
                // For example, if you're creating a WAR file:
                // bat 'mvn package'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'my-ci-cd-service-account', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                    // Authenticate with GCP
                    bat 'gcloud auth activate-service-account --key-file=%GOOGLE_APPLICATION_CREDENTIALS%'

                    // Set the project
                    bat 'gcloud config set project %PROJECT_ID%'

                    // Deploy the application, for example using SCP to copy files to the instance
                    bat 'gcloud compute scp --zone=%ZONE% path-to-your-deployable-package %INSTANCE_NAME%:/path-on-instance'
                    
                    // Optionally, start/restart your application on the instance
                    bat 'gcloud compute ssh %INSTANCE_NAME% --zone=%ZONE% --command="sudo systemctl restart your-app-service"'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            //bat 'rm -rf *'
        }
    }
}
