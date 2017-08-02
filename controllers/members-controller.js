const Member = require('../models/member');

const memberController = {};

memberController.index = (req, res) => {
    Member.findAll()
    .then(members => {
        res.render('members/member-index', {
            currentPage: 'index',
            data: members, 
        });
    }).catch(err => {
        console.log(err);
        res.status(500).josn(err);
    })
};

memberController.show = (req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      res.render('members/member-single', {
        currentPage: 'show',
        message: 'ok',
        data: member,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

memberController.create = (req, res) => {
    Member.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        h_marathon: req.body.h_marathon,
        f_marathon: req.body.f_marathon,
        t_miles: req.body.t_miles,
        pic: req.body.pic,
    }).then(()=> {
        res.redirect('/members');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

memberController.createRun = (req, res) => {
    Member.createRun({
        rundate: req.body.rundate,
        milesRan: req.body.milesRan,
        street1: req.body.street1,
        street2: req.body.street2,
        city: req.body.city,
    }, req.params.id).then(run => {
        res.redirect(`/members/${req.params.id}`)
        console.log(run);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

memberController.update = (req, res) => {
    Member.update({
        first_name: req.body.first_name,
        last_name: req.body.l_name,
        h_marathon: req.body.h_marathon,
        f_marathon: req.body.f_marathon,
        t_miles: req.body.t_miles,
        pic: req.body.pic,
    }, req.params.id).then(member => {
        res.redirect(`/members/${req.params.id}`);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

memberController.edit = (req, res) => {
    Member.findById(req.params.id)
    .then(member => {
        res.render('members/member-edit', {
            data: member,
            currentPage: 'edit',
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

memberController.delete = (req, res) => {
    Member.destroy(req.params.id)
    .then(() => {
        res.redirect('/members');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}





module.exports = memberController;