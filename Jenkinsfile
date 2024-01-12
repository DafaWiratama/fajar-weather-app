pipeline {
    agent { label 'kaniko'}

    stages {

        stage("build & SonarQube analysis") {
            agent any
            steps {
                withSonarQubeEnv('sonar.jaya-makmur.cloud') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

        stage('Build and push to registry') {
            steps {
                container(name:'kaniko', shell: '/busybox/sh') {
                    sh """#!/busybox/sh

                        /kaniko/executor \
                            --reproducible \
                            --ignore-path="/busybox" \
                            --cache=true \
                            --log-format=text \
                            --context `pwd` \
                            --dockerfile `pwd`/Dockerfile \
                            --use-new-run \
                            --destination=harbor.jaya-makmur.cloud/fajar/weather-app
                    """
                }
            }
        }

//         stage('Trigger ManifestUpdate') {
//             steps {
//                 echo "triggering updatemanifestjob"
//                 build job: 'update-manifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
//             }
//         }
    }

//     post {
//         always {
//             cleanWs()
//         }
//     }
}