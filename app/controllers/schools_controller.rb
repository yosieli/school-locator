class SchoolsController < ApplicationController
    skip_before_action :define_current_user, only: [:index, :show, :destroy]

    def index
        render json: School.all
    end

    def show
        user = School.find(params[:id])
        render json: user
    end

    def destroy
        school = School.find(params[:id])
        School.destroy(school)
    end

    

end
