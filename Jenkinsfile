pipeline {
    agent { label 'kaniko'}

    stages {
        stage("Cleanup Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Checkout from SCM"){
            steps {
                git url: 'https://github.com/DafaWiratama/fajar-weather-app.git', branch: 'main'
            }
        }

        stage('Build and push to registry') {
            steps {
                container(name:'kaniko', shell: '/busybox/sh') {
                    sh """#!/busybox/sh

                        /kaniko/executor \
                        --reproducible \
                        --ignore-path="/busybox" \
                        --caching=true \
                        --compressed-caching=false \
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