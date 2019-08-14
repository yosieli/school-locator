class FavoritesController < ApplicationController
    skip_before_action :define_current_user, only: [:index, :myFavorite,:addToFavorites,:destroy]

    def index
        render json: Favorite.all, methods: [:school]
    end

    def myFavorite
        user = User.find(params[:id])
        # school = School.find(params[:id])
        favorite = Favorite.where(user_id: user.id)
        render json: favorite, methods: [:school]
    end

    def addToFavorites
        user = User.find(params[:user_id])
        school = School.find(params[:school_id])
        favorite = Favorite.create(user_id: user.id, school_id: school.id)
        puts
        render json: favorite
    
    end

    def destroy
        user = User.find(params[:user_id])
        school = School.find(params[:school_id])
        removeSchool = Favorite.where(user_id: user.id, school_id: school.id)
        Favorite.destroy(removeSchool)
    end

    # if !Favorite.find_by(user_id: user.id, school_id: school.id)
    #     favorite = Favorite.create(user_id: user.id, school_id: school.id)
    #     render json: favorite
    # else
    #     render json: {message: "already favoritededed"}
    
    

    


end
