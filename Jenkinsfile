pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    script {
                        echo "Building Docker image using Kaniko..."
                        sh "/kaniko/executor -f `pwd`/Dockerfile -c `pwd` -v trace --destination=harbor.jaya-makmur.cloud/fajar/weather-app:latest"
                        echo "Docker image build completed."
                    }
                }
            }
        }
    }
}