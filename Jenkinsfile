pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container(name:'kaniko', shell: '/busybox/sh') {
                    sh """#!/busybox/sh

                        /kaniko/executor \
                        --reproducible \
                        --ignore-path="/busybox" \
                        --ignore-path="/kaniko" \
                        --cache=true \
                        --log-format=text \
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