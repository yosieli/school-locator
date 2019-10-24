class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :school_id
      t.boolean :has_applied
      t.timestamps
    end
  end
end
