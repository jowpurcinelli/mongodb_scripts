VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  
  config.vm.box = "MongoDBU_vm"
  config.vm.box_url = "http://mekhar/mongodbu.box"

  config.vm.provision "shell", path: "provisioners/setup.sh"

  config.vm.provider "virtualbox" do |vb|
    # Uncomment the next line to show VM window. User/pass = vagrant/vagrant
    vb.gui = true
  
    vb.name = "MongoDBU_vm"
    vb.customize ["modifyvm", :id, "--memory", "2048"]
    vb.customize ["modifyvm", :id, "--cpus", "1"]  
  end

  config.vm.provider "vmware_fusion" do |v|
    # Uncomment the next line to show VM window. User/pass = vagrant/vagrant
    v.gui = true

    v.vmx["displayname"] = "MongoDBU"
    v.vmx["memsize"] = "2048"
    v.vmx["numvcpus"] = "1"
  end

  config.vm.provider "vmware_workstation" do |v|
    # Uncomment the next line to show VM window. User/pass = vagrant/vagrant
    v.gui = true

    v.vmx["displayname"] = "MongoDBU"
    v.vmx["memsize"] = "2048"
    v.vmx["numvcpus"] = "1"
  end

end
