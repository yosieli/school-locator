class UsersController < ApplicationController
    def index
     render json: User.all
    end

    def create
    user = User.create(users_params)
    render json :user
    end

    def show
      user = User.find(params[:id])
      render json :user
    end


    def users_params
        params.permit(:first_name,:password)
    end

    
    
end
