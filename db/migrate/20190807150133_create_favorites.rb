class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :school_id
      t.string :school_name
      t.string :rating
      t.string :description
      t.timestamps
    end
  end
end
