class AddItemToDepartment < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :department, foreign_key: true
  end
end
