class ApplicationController < ActionController::API
    attr_reader :current_user 
    before_action :define_current_user 

    def define_current_user

        begin 

            # request.headers = eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.A6uJWtxKMq_aarBbagofRur0yC0RC-ZFpMDxi3N1kxE
            token = request.headers['Authorization'].split(' ')[1]
            # type, token = request.headers['Authorization'].split(' ')
            
            payload = JWT.decode(token, 'jdhfjkdshsdjsd')[0]

            # payload, header = JWT.decode(token, 'a;slkdjfgh')
            if(payload['type'] == 'user')
                @current_user = User.find(payload['id'])
            end

           

            if @current_user
                return true
            else
                render json: {
                    error: true,
                    message: 'User does not exist'
                }
            end
        rescue 
            # They are not
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end
    end





end
