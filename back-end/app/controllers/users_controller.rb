class UsersController < ApplicationController
  skip_before_action :define_current_user, only: [ :authenticate, :create]

    def index
     render json: User.all
    end

    def create
    user = User.create(users_params)
    render json: user
  
    end

    def show
      user = User.find(params[:id])
      render json: user
    end

    def applicationForm
    user = User.create(users_params)
    render json: user
    
    end


    def users_params
        params.permit(:first_name, :last_name, :password,:zip_code,:current_grade)
    end
    

   def authenticate
      @user=User.find_by(first_name: params[:first_name])
      if @user !=nil && @user.authenticate(params[:password])
         render json: @user, methods: [:auth_token]
      else
         render json: {error:true,message: 'Login Failed'}
      end
  end

    
    
end
