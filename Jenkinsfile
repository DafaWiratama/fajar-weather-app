pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    script {
                        sh """
                            /kaniko/executor \
                            -c `pwd` \
                            -f `pwd`/Dockerfile \
                            --use-new-run \
                            --destination=harbor.jaya-makmur.cloud/fajar/weather-app:latest
                        """
                    }
                }
            }
        }
    }
}