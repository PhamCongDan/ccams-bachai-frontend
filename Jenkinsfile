pipeline {
    agent any
    tools { nodejs "node" }
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                git 'https://github.com/PhamCongDan/ccams-bachai-frontend.git'
            }
        }

        stage('test npm') { 
            steps {
                sh 'npm --version' 
            }
        }

        // stage('Install Dependencies') {
        //     steps {
        //         // Install Node.js and npm
        //         // You might need to adjust this according to your Jenkins setup
        //         sh 'npm install'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         // Build your React.js application
        //         sh 'npm run build'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         // Example deployment steps, adjust as per your deployment process
        //         // This could be deploying to a web server, AWS, Heroku, etc.
        //         // Here, we're just copying the build folder to a remote server
        //         sshagent(['your-ssh-credentials']) {
        //             sh 'scp -r build/* user@your-server:/path/to/destination'
        //         }
        //     }
        // }
    }

    post {
        success {
            // Send notification if build succeeded
            // You might want to integrate with Slack, email, etc.
            echo 'Build successful - Send notification'
        }
        failure {
            // Send notification if build failed
            // You might want to integrate with Slack, email, etc.
            echo 'Build failed - Send notification'
        }
    }
}
