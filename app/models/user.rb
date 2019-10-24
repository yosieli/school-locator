class User < ApplicationRecord
    has_secure_password 
    has_many :favorites
    has_many :schools, through: :favorites

    # validates :first_name, presence: true, uniqueness: true 
    # validates :password, length: { in: 6..20 }

    def auth_token
        JWT.encode({ id: self.id, type: 'user'}, 'jdhfjkdshsdjsd')
    end 

    def as_json(*)
        super.except('password_digest')
    end
    
end
