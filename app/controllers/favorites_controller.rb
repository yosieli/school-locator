class FavoritesController < ApplicationController
    skip_before_action :define_current_user, only: [:index, :favorites]

    def index
        render json: Favorite.all
    end

    def favorites
        user = User.find(params[:id])
        school = School.find(params[:id])
        render json: user,school
    end

    


end
