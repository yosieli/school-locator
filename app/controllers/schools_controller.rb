class SchoolsController < ApplicationController
    skip_before_action :define_current_user, only: [:index, :show]

    def index
        render json: School.all
    end

    def show
        user = School.find(params[:id])
        render json: user
    end

    

end
