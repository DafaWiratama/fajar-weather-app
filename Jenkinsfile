pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    script {
                        sh """
                            /kaniko/executor \
                            --context `pwd` \
                            --dockerfile `pwd`/Dockerfile \
                            --use-new-run \
                            --destination=harbor.jaya-makmur.cloud/fajar/weather-app:latest
                        """
                    }
                }
            }
        }
    }
}