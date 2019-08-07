class User < ApplicationRecord
    has_many :favorites
    has_many :schools, through: :favorites
end
