function disastertype(num) {
   if (num == 0) {
      document.getElementById("typetext").textContent = `Tornadoes, in a similar vein to wildfires, can have their paths 
      predicted using computing technology, which allows for early alarms and possible evacuations, 
      reducing the risk of of the disaster. This tracking is often done through a Doppler radar system, which sends
      out pulses of microwaves and measures the amount of energy that is reflected by debris. This can be used to measure
      the velocity of the tornado, giving rough estimates on its path. Tornadoes can also be predicted several days in
      advance, which is achieved through the montitoring of conditions that may cause a tornado using satellite imagery.`}
   if (num == 1) {
      document.getElementById("typetext").textContent = `Data collected from satellites is often analysed by AI tools 
      to help map where flooding is likely to take place, both acting as prediction technology, and a warning system. This 
      is relatively recent technology however, and the information that it generates is generally checked by several people
      before it is actually deemed to be valid. This is largely in part due to the inconsistancy of AI, which leads the 
      exact same scenario to be analysed in different ways by the AI.`}
   if (num == 2) {
      document.getElementById("typetext").textContent = `Like the other disasters, technology can both be used to raise 
      alarms, and to predict where a disaster is likely. Alongside this, drones are often used to help speed up the 
      process of search and rescue after a disaster takes place, helping to further reduce the risk of death associated 
      with the hurricanes. Alongside this, it is also important that the information being stored in IT infrastructure is
      well equipped for the cases where disasters like hurricanes may damage them, otherwise critical data risks being
      lost. This is generally achieved through keeping backups of the data that are dispersed across several areas, which
      are unlikely to be hit by a disaster concurrently.`}
}
