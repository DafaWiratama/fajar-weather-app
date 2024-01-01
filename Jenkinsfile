pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    script {
                        sh """
                            /kaniko/executor \
                            --cache=true \
                            --compressed-caching=false \
                            --log-format=text \

                            --no-push \

                            --reproducible \
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