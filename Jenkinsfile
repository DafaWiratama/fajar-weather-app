pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    script {
                        sh "/kaniko/executor -f `pwd`/Dockerfile -c `pwd`--destination=harbor.jaya-makmur.cloud/fajar/weather-app:latest"
                    }
                }
            }
        }
    }
}