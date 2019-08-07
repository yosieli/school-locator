class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :frist_name
      t.string :last_name
      t.string :password
      t.string :gender
      t.integer :age
      t.string :zip_code
      t.string :city
      t.string :current_grade
      t.string :school_id
      t.string :favorite_id
      t.timestamps
    end
  end
end
