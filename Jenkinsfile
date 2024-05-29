pipeline {
    agent any

    environment {
        GOOGLE_APPLICATION_CREDENTIALS = credentials('my-ci-cd-service-account') // Update this with the actual credentials ID from Jenkins
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
                sh 'echo "Building the application..."'
                // For example, if you're using Maven:
                // sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                // For example, if you're using Maven:
                // sh 'mvn test'
            }
        }

        stage('Package') {
            steps {
                sh 'echo "Packaging the application..."'
                // For example, if you're creating a WAR file:
                // sh 'mvn package'
            }
        }

        stage('Deploy') {
            steps {
                // Install Google Cloud SDK if not installed
                sh 'curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-367.0.0-linux-x86_64.tar.gz'
                sh 'tar -zxvf google-cloud-sdk-367.0.0-linux-x86_64.tar.gz'
                sh './google-cloud-sdk/install.sh -q'
                sh 'source ./google-cloud-sdk/path.bash.inc'

                // Authenticate with GCP
                sh 'gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS'

                // Set the project
                sh 'gcloud config set project $PROJECT_ID'

                // Deploy the application, for example using SCP to copy files to the instance
                sh 'gcloud compute scp --zone=$ZONE ./path-to-your-deployable-package $INSTANCE_NAME:/path-on-instance'
                
                // Optionally, start/restart your application on the instance
                sh 'gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo systemctl restart your-app-service"'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            //sh 'rm -rf *'
        }
    }
}
