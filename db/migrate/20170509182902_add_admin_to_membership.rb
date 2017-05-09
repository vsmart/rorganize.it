class AddAdminToMembership < ActiveRecord::Migration
  def change
    add_column :memberships, :admin, :boolean, default: false, null: false
  end
end
