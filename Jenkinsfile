pipeline {
    agent { node { label 'master' } }


    environment {
        GIT_REPO_NAME = ''
    }

    stages {

        stage("Initialize Properties") {
            steps {
                script {
                    GIT_REPO_NAME = env.GIT_URL.tokenize('/')[-1].replace('.git', '')
                }
            }
        }

        stage("SonarQube analysis") {
            tools { nodejs "nodejs" }

            steps {
                script {
                    def scannerHome = tool 'SonarScanner';
                    withSonarQubeEnv('sonar.jaya-makmur.cloud') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=${GIT_REPO_NAME} -Dsonar.projectName=${GIT_REPO_NAME}"
                    }
                }
            }
        }

        stage("Quality gate") {
            timeout(time: 1, unit: 'HOURS') {
                def qg = waitForQualityGate()
                if (qg.status != 'OK') {
                    error "Pipeline aborted due to quality gate failure: ${qg.status}"
                }
            }
        }

//         stage('Build and push to registry') {
//             agent { label 'kaniko'}
//             steps {
//                 container(name:'kaniko', shell: '/busybox/sh') {
//                     sh """#!/busybox/sh
//
//                         /kaniko/executor \
//                             --reproducible \
//                             --ignore-path="/busybox" \
//                             --cache=true \
//                             --log-format=text \
//                             --context `pwd` \
//                             --dockerfile `pwd`/Dockerfile \
//                             --use-new-run \
//                             --destination=harbor.jaya-makmur.cloud/fajar/weather-app
//                     """
//                 }
//             }
//         }

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