class CreateSchools < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|
      t.string :school_name
      t.integer :rating
      t.string :zip_code
      t.string :description
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
