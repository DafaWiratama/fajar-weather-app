pipeline {
    agent { label 'kaniko'}

    stages {
        stage('Build and push to registry') {
            steps {
                container('kaniko') {
                    git url: 'https://github.com/DafaWiratama/fajar-weather-app.git', branch: 'main'

                    sh "/kaniko/executor -f `pwd`/Dockerfile -c `pwd` --cache=true --destination=harbor.jaya-makmur.cloud/fajar/weather-app"
                }
            }
        }
    }
}